//rotate chess boars to black and pieces


document.getElementById('black_button').onclick = function () {
    board_black();
    rotate_pieces_black();
    remove_rpg();
};
//rotate board to black
function board_black() {


    document.getElementById('rotate').className = 'rotation';

}
// rotate all chess pieces to black
function rotate_pieces_black() {


    var divs = Array.prototype.slice.call(document.querySelectorAll('.figures'));


    divs.forEach(function (div) {
        div.classList.toggle('rotate_figures');
    });
}

// this delete class

function remove_rpg() {

    var divs = Array.prototype.slice.call(document.querySelectorAll('.figures'));


    divs.forEach(function (div) {
        div.classList.remove('rotate_figures_to_normal');
    });

}

//rotate chess board to white

document.getElementById('white_button').onclick = function () {

    rotate_white();
    rotate_pieces_white();
    remove_rpw();
};

function rotate_white() {

    document.getElementById('rotate').className = 'to_yours';
}
// rotate all chess pieces to white

function rotate_pieces_white() {
    var divs = Array.prototype.slice.call(document.querySelectorAll('.figures'));


    divs.forEach(function (div) {
        div.classList.toggle('rotate_figures_to_normal');
    });
}
// this delete class

function remove_rpw() {

    var divs = Array.prototype.slice.call(document.querySelectorAll('.figures'));


    divs.forEach(function (div) {
        div.classList.remove('rotate_figures');
    });

}

// make only one pop_up in a time

function delete_other_pop_up() {

    var divs = Array.prototype.slice.call(document.querySelectorAll('.figures'));


    divs.forEach(function (div) {
        div.classList.remove('pop_up');
    });
}

//make only one available_moves on time

function delete_other_available_moves() {

    var divs = Array.prototype.slice.call(document.querySelectorAll('.div'));


    divs.forEach(function (div) {
        div.classList.remove('available_moves');
    });

    divs.forEach(function (div) {
        div.classList.remove('div');
    });
}

// add div background
function add_background() {


    var add_divs = document.getElementsByClassName("div");
    for (var i = 0; i < add_divs.length; i++) {
        add_divs[i].className += " available_moves";
    }


}


//black rook a8

document.getElementById('black_rook_a8').onclick = function () {
    delete_other_pop_up();
    delete_other_available_moves();
    background_color();

};

function background_color() {

    document.getElementById('black_rook_a8').className += ' pop_up';
}


//black pawn a7

document.getElementById('black_pawn_a7').onclick = function () {

    delete_other_pop_up();
    delete_other_available_moves ();
    bpa7_background_color();
    add_div_a6();
    add_div_a5 ();
    add_background();

};

function bpa7_background_color() {

    document.getElementById('black_pawn_a7').className += ' pop_up';
}

function add_div_a6() {

    document.getElementById('a6').innerHTML = '<div class="div"></div>';
}

function add_div_a5() {

    document.getElementById('a5').innerHTML = '<div class="div"></div>';

}
//black pawn b7

document.getElementById('black_pawn_b7').onclick = function () {

    delete_other_pop_up();
    delete_other_available_moves ();
    bpb7_background_color();
    add_div_b6();
    add_div_b5 ();
    add_background();
};

function bpb7_background_color() {

    document.getElementById('black_pawn_b7').className += ' pop_up';
}

function add_div_b6() {

    document.getElementById('b6').innerHTML = '<div class="div"></div>';
}

function add_div_b5() {

    document.getElementById('b5').innerHTML = '<div class="div"></div>';

}
//black pawn c7

document.getElementById('black_pawn_c7').onclick = function () {

    delete_other_pop_up();
    delete_other_available_moves ();
    bpc7_background_color();
    add_div_c6();
    add_div_c5();
    add_background();
    };

function bpc7_background_color() {

    document.getElementById('black_pawn_c7').className += ' pop_up';
}

function add_div_c6() {

    document.getElementById('c6').innerHTML = '<div class="div"></div>';
}

function add_div_c5() {

    document.getElementById('c5').innerHTML = '<div class="div"></div>';

}
//black pawn d7

document.getElementById('black_pawn_d7').onclick = function () {

    delete_other_pop_up();
    delete_other_available_moves ();
    bpd7_background_color();
    add_div_d6();
    add_div_d5();
    add_background();
};

function bpd7_background_color() {

    document.getElementById('black_pawn_d7').className += ' pop_up';
}

function add_div_d6() {

    document.getElementById('d6').innerHTML = '<div class="div"></div>';

}

function add_div_d5() {

    document.getElementById('d5').innerHTML = '<div class="div"></div>';

}


//black pawn d7

document.getElementById('black_pawn_e7').onclick = function () {

    delete_other_pop_up();
    delete_other_available_moves ();
    bpe7_background_color();
    add_div_e6();
    add_div_e5();
    add_background();
};

function bpe7_background_color() {

    document.getElementById('black_pawn_e7').className += ' pop_up';
}

function add_div_e6() {

    document.getElementById('e6').innerHTML = '<div class="div"></div>';

}

function add_div_e5() {

    document.getElementById('e5').innerHTML = '<div class="div"></div>';

}