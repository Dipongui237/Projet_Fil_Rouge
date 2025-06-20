<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'user_id',
        'agency_id',
        'trip_id',
        'plan_id',
        'passenger_name',
        'passenger_email',
        'passenger_phone',
        'seat_number',
        'status',
    ];
}