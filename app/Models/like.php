<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Beer;

class Like extends Model {
    use HasFactory;
    protected $fillable = ['gebruikers_id', 'bier_id', 'rating'];

    public function beer() {
        return $this->belongsTo(Beer::class);
    }
}
