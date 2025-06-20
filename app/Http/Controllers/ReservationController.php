<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class ReservationController extends Controller
{
    public function index()
    {
        return Inertia::render('Reservation', [
            'auth' => auth()->user() ? [
                'user' => auth()->user()->only('id', 'name', 'email', 'role')
            ] : ['user' => null],
            'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
        ]);
    }

    public function downloadTicket()
    {
        $data = [
            'user' => auth()->user()->name,
            'agency' => 'Agence Exemple',
            'plan' => 'Plan Standard',
            'seats' => ['A1', 'A2'],
            'date' => now()->toDateString(),
        ];
        $pdf = Pdf::loadView('ticket', $data);
        return $pdf->download('ticket.pdf');
    }
}