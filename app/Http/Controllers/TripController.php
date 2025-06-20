<?php

namespace App\Http\Controllers;

use App\Models\Trip;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TripController extends Controller
{
    public function index()
    {
        $trips = Trip::with('agency')->get(['id', 'agency_id', 'departure', 'destination', 'departure_time', 'logo'])
            ->map(function ($trip) {
                return [
                    'id' => $trip->id,
                    'agency' => [
                        'id' => $trip->agency->id,
                        'name' => $trip->agency->name,
                        'Address' => $trip->agency->Address,
                        'logo' => $trip->agency->logo,
                    ],
                    'departure' => $trip->departure,
                    'destination' => $trip->destination,
                    'departure_time' => $trip->departure_time,
                    'logo' => $trip->logo,
                ];
            });

        return Inertia::render('Trips/Index', [
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'role' => auth()->user()->role ?? null,
                ] : null,
            ],
            'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
            'trips' => $trips,
        ]);
    }
}
?>