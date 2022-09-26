@component('mail::message')
# Nova Mensagem

<h3>Assunto: {{ $details['subject'] }}</h3>
<h3>Nome: {{ $details['name'] }}</h3>
<h3>E-mail: {{ $details['email'] }}</h3>
<h3>Mensagem:</h3>
<p>{{ $details['text'] }}</p>

Obrigado,<br>
{{ config('app.name') }}
@endcomponent
