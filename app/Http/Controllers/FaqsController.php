<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FaqsController extends Controller
{
    public function index()
    {
        $faqs = [
            [
                'question' => 'Comment réinitialiser mon mot de passe ?',
                'answer' => 'Vous pouvez réinitialiser votre mot de passe en cliquant sur "Mot de passe oublié" sur la page de connexion.'
            ],
            [
                'question' => 'Comment contacter le support ?',
                'answer' => 'Notre équipe de support est disponible 24/7 via email à support@example.com.'
            ],
            [
                'question' => 'Comment annuler une réservation ?',
                'answer' => 'Pour cela, rendez-vous dans votre profil et sélectionnez la réservation à annuler.'
            ],
            [
                'question' => 'Comment savoir si un siège est déjà occupé ?',
                'answer' => 'Si le siège que vous avez choisi est déjà occupé, vous serez invité à en choisir un autre.'
            ]
        ];

        return Inertia::render('Faqs', [
            'auth' => [
                'user' => auth()->user() ? [
                    'id' => auth()->user()->id,
                    'name' => auth()->user()->name,
                    'email' => auth()->user()->email,
                    'role' => auth()->user()->role ?? null,
                ] : null,
            ],
            'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : [],
            'faqs' => $faqs,
        ]);
    }
}
?>