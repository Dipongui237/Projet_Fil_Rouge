<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    protected $fillable = ['trip_id', 'name', 'description', 'price', 'is_vip', 'image'];
}
?>