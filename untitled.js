<!DOCTYPE html>
<html>
    <head>
        <title>about:blank | 3kh0</title>
    </head>
    <body>
        <script>
        function create() {
            var url = document.getElementById('input');
            var win = window.open();
            win.document.body.style.margin = '0';
            win.document.body.style.height = '100vh';
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = url;
            win.document.body.appendChild(iframe);
        }
        </script>
        <input type="text" value="https://www.google.com/" placeholder="https://google.com" id='input' autofocus>
        <button onclick='create()'>Create!</button>
    </body>
</html>