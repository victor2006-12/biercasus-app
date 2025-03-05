<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Beer;
use App\Models\Like;
use Illuminate\Support\Facades\Auth;

class BeerController extends Controller
{
    public function index()
    {
        $beers = Beer::withAvg('likes', 'rating')->get();
        return response()->json($beers);
    }

    public function rateBeer(Request $request)
    {
        $request->validate([
            'bier_id' => 'required|exists:beers,id',
            'rating' => 'required|integer|min:1|max:5',
            'notitie' => 'nullable|string'
        ]);

        $userId = Auth::id(); // Haalt de ingelogde gebruiker op

        $like = Like::updateOrCreate(
            ['gebruikers_id' => $userId, 'bier_id' => $request->bier_id],
            ['rating' => $request->rating, 'notitie' => $request->note]
        );

        return response()->json(['message' => 'Bier beoordeeld!']);
    }
}

