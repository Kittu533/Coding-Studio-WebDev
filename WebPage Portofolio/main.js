function toggleDetail(e) {
    const target = $(e.target)
    
    if($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active");
    }else{  
        $(target).html("Less Info").addClass("active")
    }
    // // $(target).html('Less Info').addClass('Active')
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail") 

    // console.log($(item).children());

    $(detail).slideToggle()
}

function onSubmitForm(e) {
    e.preventDefault();

    const email = $("#inp-email")
    const subject = $("#inp-subject")
    const message = $("#inp-subject")

    if(!email.val() || !subject.val() || !message.val()){
        alert("Please fill the form")
    }else{
        alert("Submit success")
    }
}
// Tambahkan event listener untuk setiap item menu di navbar
$(".navbar-nav .nav-link").on("click", function(e) {
    e.preventDefault();

    // Panggil fungsi toggleShow() untuk menampilkan konten dan mengubah rotasi panah
    toggleShow(e);
});

let isContentVisible = false; // Define variabel di sini

function toggleShow(e) {
    e.preventDefault();

    if (!isContentVisible) {
        // Menampilkan semua bagian kecuali "home" dengan efek slideDown
        $(".about, .work, .contact, .footer").slideDown();
        isContentVisible = true;
    } else {
        // Menutup semua bagian kecuali "home" dengan efek slideUp
        $(".about, .work, .contact, .footer").slideUp();
        isContentVisible = false;
    }
}
import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
      }
