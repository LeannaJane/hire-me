<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">



    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/pages/{$page['component']}.jsx"])
    @inertiaHead
  </head>
  <body class="bg-off-black">
    @inertia
  </body>
</html>
