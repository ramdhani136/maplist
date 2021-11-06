<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Area extends Model
{
    protected $table = "area";
    protected $guarded = [];

    public function Location()
    {
        return $this->hasMany(Location::class, 'id_area', 'id');
    }
}
