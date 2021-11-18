<?php

namespace App\Http\Controllers;

use App\Events\AreaCreated;
use App\Http\Resources\AreaResource;
use App\Models\Area;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AreaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showArea = AreaResource::collection(Area::orderBy('name', 'ASC')->get());
        return $showArea;
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
        $data = Area::create($request->all());
        $showArea = AreaResource::collection(Area::orderBy('name', 'ASC')->get());
        AreaCreated::dispatch($showArea);
        return Response(new AreaResource($data), response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return AreaResource::collection(Area::where('id', $id)->get());
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
        Area::where('id', $id)->update($request->all());
        $showArea = AreaResource::collection(Area::orderBy('name', 'ASC')->get());
        AreaCreated::dispatch($showArea);
        return response('update', response::HTTP_CREATED);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Area::where('id', $id)->delete();
        $showArea = AreaResource::collection(Area::orderBy('name', 'ASC')->get());
        AreaCreated::dispatch($showArea);
        return response('deleted', response::HTTP_OK);
    }
}
