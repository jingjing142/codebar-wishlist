/* Exercise 1: Wish list */
function addToList(item) {
    const wishList = document.getElementById('items');
    
    const listItem = document.createElement('li');
    const itemContent = document.createTextNode(item);
    listItem.appendChild(itemContent);

    const pending = document.createElement('span');
    pending.classList.add('label');
    pending.classList.add('pending');

    const pendingContent = document.createTextNode('Pending');
    pending.appendChild(pendingContent);
    listItem.appendChild(pending);

    wishList.appendChild(listItem);
}

$(document).on('click', '#add-to-list', function() {
    addToList($('#item').val());
    $('#item').val('');
    $('#item').focus();

    updateTotal();
});

$(document).on('click', '.pending', function() {
    var li_node = $(this).parent();

    const span = document.createElement('span');
    span.classList.add('label');
    span.classList.add('success');
    const spanContent = document.createTextNode('Done!');
    span.appendChild(spanContent);

    li_node.append(span);
    $(this).remove();

    li_node.addClass('completed');
    updateTotal();
});

function updateTotal() {
    const pending = $('.pending').length;
    const completed = $('.completed').length;

    $('.total').text('Pending: ' + pending + ' Completed: ' + completed)
} 
