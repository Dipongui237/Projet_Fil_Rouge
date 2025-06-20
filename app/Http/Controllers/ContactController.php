<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function index()
    {
        return Inertia::render('Contact', [
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'role' => auth()->user()->role ?? null,
                ] : null,
            ],
            'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        // Logique pour traiter le message (par exemple, envoyer un email ou sauvegarder dans la base)
        // Pour l'exemple, on retourne une réponse avec un message de succès
        return redirect()->back()->with('success', 'Message envoyé avec succès !');
    }
}
?>