let numberOfLetters = document.querySelectorAll('.alphabet');


numberOfLetters.forEach((letterButton) => letterButton.addEventListener('click', beginSoundAction));



function beginSoundAction() {
    let letterButtonInnerHTML = this.innerHTML;

    makeSound(letterButtonInnerHTML);
  

}

document.addEventListener('keydown', function (event) {
    makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case 'a':
        case 'Aa':
        case 'A':
            let a = new Audio('sounds/a.mp3');
            a.play();

            break;

        case 'b':
        case 'Bb':
        case 'B':
            let b = new Audio('sounds/b.mp3');
            b.play();

            break;

        case 'c':
        case 'Cc':
        case 'C':
            let c = new Audio('sounds/c.mp3');
            c.play();

            break;


        case 'd':
        case 'Dd':
        case 'D':
            let d = new Audio('sounds/d.mp3');
            d.play();

            break;


        case 'e':
        case 'Ee':
        case 'E':
            let e = new Audio('sounds/e.mp3');
            e.play();

            break;

        case 'f':
        case 'Ff':
        case 'F':
            let f = new Audio('sounds/f.mp3');
            f.play();

            break;

        case 'g':
        case 'Gg':
        case 'G':
            let g = new Audio('sounds/g.mp3');
            g.play();

            break;

        case 'h':
        case 'Hh':
        case 'H':
            let h = new Audio('sounds/h.mp3');
            h.play();

            break;

        case 'i':
        case 'Ii':
        case 'I':
            let i = new Audio('sounds/i.mp3');
            i.play();

            break;

        case 'j':
        case 'Jj':
        case 'J':
            let j = new Audio('sounds/j.mp3');
            j.play();

            break;

        case 'k':
        case 'Kk':
        case 'K':
            let k = new Audio('sounds/k.mp3');
            k.play();

            break;

        case 'l':
        case 'Ll':
        case 'L':
            let l = new Audio('sounds/l.mp3');
            l.play();

            break;

        case 'm':
        case 'Mm':
        case 'M':
            let m = new Audio('sounds/m.mp3');
            m.play();

            break;

        case 'n':
        case 'Nn':
        case 'N':
            let n = new Audio('sounds/n.mp3');
            n.play();

            break;

        case 'o':
        case 'Oo':
        case 'O':
            let o = new Audio('sounds/o.mp3');
            o.play();

            break;

        case 'p':
        case 'Pp':
        case 'P':
            let p = new Audio('sounds/p.mp3');
            p.play();

            break;

        case 'q':
        case 'Qq':
        case 'Q':
            let q = new Audio('sounds/q.mp3');
            q.play();

            break;

        case 'r':
        case 'Rr':
        case 'R':
            let r = new Audio('sounds/r.mp3');
            r.play();

            break;

        case 's':
        case 'Ss':
        case 'S':
            let s = new Audio('sounds/s.mp3');
            s.play();

            break;

        case 't':
        case 'Tt':
        case 'T':
            let t = new Audio('sounds/t.mp3');
            t.play();

            break;

        case 'u':
        case 'Uu':
        case 'U':
            let u = new Audio('sounds/u.mp3');
            u.play();

            break;

        case 'v':
        case 'Vv':
        case 'V':
            let v = new Audio('sounds/v.mp3');
            v.play();

            break;

        case 'w':
        case 'Ww':
        case 'W':
            let w = new Audio('sounds/w.mp3');
            w.play();

            break;

        case 'x':
        case 'Xx':
        case 'X':
            let x = new Audio('sounds/x.mp3');
            x.play();

            break;

        case 'y':
        case 'Yy':
        case 'Y':
            let y = new Audio('sounds/y.mp3');
            y.play();

            break;

        case 'z':
        case 'Zz':
        case 'Z':
            let z = new Audio('sounds/z.mp3');
            z.play();

            break;

        default:
            break;
    }
}