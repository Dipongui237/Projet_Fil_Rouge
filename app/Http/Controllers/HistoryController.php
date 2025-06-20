<?php

namespace App\Http\Controllers;

use App\Models\Reservation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HistoryController extends Controller
{
    public function index()
    {
        $reservations = Reservation::with(['agency', 'trip', 'plan'])
            ->where('passenger_email', auth()->user()->email ?? '')
            ->get()
            ->map(function ($reservation) {
                return [
                    'action' => 'Réservation',
                    'utilisateur' => $reservation->passenger_name,
                    'date' => $reservation->created_at->format('Y-m-d H:i'),
                    'agency' => [
                        'id' => $reservation->agency->id,
                        'name' => $reservation->agency->name,
                        'Address' => $reservation->agency->Address,
                        'logo' => $reservation->agency->logo,
                    ],
                    'trip' => [
                        'id' => $reservation->trip->id,
                        'agency_id' => $reservation->trip->agency_id,
                        'departure' => $reservation->trip->departure,
                        'destination' => $reservation->trip->destination,
                        'departure_time' => $reservation->trip->departure_time,
                        'logo' => $reservation->trip->logo,
                    ],
                    'plan' => [
                        'id' => $reservation->plan->id,
                        'trip_id' => $reservation->plan->trip_id,
                        'name' => $reservation->plan->name,
                        'description' => $reservation->plan->description,
                        'price' => $reservation->plan->price,
                        'is_vip' => $reservation->plan->is_vip,
                    ],
                    'passenger_name' => $reservation->passenger_name,
                    'passenger_email' => $reservation->passenger_email,
                    'passenger_phone' => $reservation->passenger_phone,
                    'passengers' => $reservation->passengers,
                    'seat_number' => $reservation->seat_number,
                ];
            });

        return Inertia::render('History', [
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'role' => auth()->user()->role ?? null,
                ] : null,
            ],
            'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
            'history' => $reservations,
        ]);
    }
}
?>