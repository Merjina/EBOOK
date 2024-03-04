<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Cache;

class IsInstalled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $envPath = base_path('.env');
        if (! file_exists($envPath)) {
            dd("Application not Installed");
        } else {

        }

        return $next($request);
    }
}
