<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    protected $fillable = ['agence_id', 'ville_depart', 'ville_arrivee', 'heure_depart', 'prix', 'image'];

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agence_id');
    }
}
?>