<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LocationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'addr' => $this->addr,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'id_area' => $this->id_area,
            'area' => $this->area->name,
            'description' => $this->description,
            'uri' => $this->uri,
            'pic' => $this->pic,
            'phone' => $this->phone,

        ];
    }
}
