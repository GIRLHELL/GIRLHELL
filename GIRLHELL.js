<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<div id="tabs">
  <ul>
    <li><a href="#tab-1">Tab 1</a></li>
    <li><a href="#tab-2">Tab 2</a></li>
    <li><a href="#tab-3">Tab 3</a></li>
    <li><a href="#tab-4">Tab 4</a></li>
    <li><a href="#tab-5">Tab 5</a></li>
    <li><a href="#tab-6">Tab 6</a></li>
  </ul>
  <div id="tab-1">Tab 1 content</div>
  <div id="tab-2">Tab 2 content</div>
  <div id="tab-3">Tab 3 content</div>
  <div id="tab-4">Tab 4 content</div>
  <div id="tab-5">Tab 5 content</div>
  <div id="tab-6">Tab 6 content</div>
</div>

<script>
  $(function() {
    $("#tabs").tabs();
  });
</script>
