<?php

namespace App\Http\Controllers;

use App\Http\Resources\LocationResource;
use App\Models\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\Response;

class LocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return LocationResource::collection(Location::orderBy('name', 'ASC')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'id_area' => 'required',
            'file' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $data = new Location;

        $data->name = $request->name;
        $data->addr = $request->addr;
        $data->lat = $request->lat;
        $data->lng = $request->lng;
        $data->id_area = $request->id_area;
        $data->description = $request->description;
        $data->phone = $request->phone;
        $data->pic = $request->pic;

        if ($request->hasFile('file')) {
            $request->file->store('/public/images');
            $data->uri = $request->file->hashName();
        }

        $data->save();

        return ["status" => "success"];
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return LocationResource::collection(Location::where('id', $id)->get());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data =  Location::find($id);
        $data->name = $request->input('name');
        $data->addr = $request->input('addr');
        $data->lat = $request->input('lat');
        $data->lng = $request->input('lng');
        $data->id_area = $request->input('id_area');
        $data->description = $request->input('description');
        $data->phone = $request->input('phone');
        $data->pic = $request->input('pic');

        if ($request->hasFile('file')) {

            if (Storage::exists('public/images/' . $data->uri)) {
                Storage::delete('public/images/' . $data->uri);
                $data->delete();
            }
            $request->file->store('/public/images');
            $data->uri = $request->file->hashName();
        }

        $data->update();

        return ["status" => "success"];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $gambar = Location::where('id', $id)->first();
        if (Storage::exists('public/images/' . $gambar->uri)) {
            Storage::delete('public/images/' . $gambar->uri);
            $gambar->delete();
            return response('deleted', response::HTTP_OK);
            /*
                Delete Multiple File like this way
                Storage::delete(['upload/test.png', 'upload/test2.png']);
            */
        } else {
            $gambar->delete();
            return response('deleted', response::HTTP_OK);
        }
    }
}
