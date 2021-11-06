<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    protected $table = "location";
    protected $guarded = [];

    public function Area()
    {
        return $this->belongsTo(Area::class, 'id_area', 'id');
    }
}
