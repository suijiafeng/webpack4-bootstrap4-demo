import 'jquery'
import 'bootstrap';
import './scss/app.scss';
import './index.scss'
import './index.html'

console.log('333');
try {
    if ($('body')) {
        $('body').append('jQuery')
    }
} catch (e) {
    alert('no jQuery');
}


$('#success').bind('click', function () {
    debugger;
    console.log('click button');
});
