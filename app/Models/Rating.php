<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Rating extends Model {
    use HasFactory;
    protected $fillable = ['user_id', 'beer_id', 'rating', 'note'];
    public function beer() {
        return $this->belongsTo(Beer::class);
    }
}