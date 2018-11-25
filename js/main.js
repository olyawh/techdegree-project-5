const $input = $('#searchbox');
const $result = $('.gallery a')

$input.keyup(function(event) {
  const value = $input.val().toLowerCase();
  $result.show();
  if (value !== '') {
    $result.not('[title*="' + value + '"]').hide();
  }
});