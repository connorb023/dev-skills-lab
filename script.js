$(document).ready(function() {
    // Hide the skills list on page load
    $('.skill-container').hide();
  
    // Add a new skill to the list
    $('button').click(function() {
      var skill = $('input[type="text"]').val();
      if (skill !== '') {
        $('.skill-container').append('<div class="skill"><div class="icon-container"><div class="icon-x">x</div></div><div class="skill-text">' + skill + '</div></div>');
        $('input[type="text"]').val('');
        $('.skill-container').show();
      }
    });
  
    // Remove a skill from the list
    $('.skill-container').on('click', '.icon-x', function() {
      $(this).closest('.skill').remove();
      if ($('.skill-container').children().length === 0) {
        $('.skill-container').hide();
      }
    });
  });
  