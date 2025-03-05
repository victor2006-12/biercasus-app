<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $fillable = ['gebruikers_id', 'bier_id', 'rating', 'notitie'];

    public function beer()
    {
        return $this->belongsTo(Beer::class, 'bier_id');
    }
}

