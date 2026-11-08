    <script>
  
        const activityData = [
            { name: "Jawarto", activity: "Menambahkan data Letter C baru untuk Ahmad Hidayat", waktu: "Hari ini, 09:35" },
            { name: "Jawarto", activity: "Mengubah data Letter C milik Titik Hartatik", waktu: "Kemarin, 15:35" },
            { name: "Jawarto", activity: "Mengupdate data Letter C milik Joko", waktu: "Kemarin, 14:35" },
            { name: "Jawarto", activity: "Menghapus data Letter C milik Juwono", waktu: "Kemarin, 09:35" }
        ];

        const logContainer = document.getElementById('activityLog');

        // Tambahkan style agar container bisa discroll jika konten banyak
        logContainer.style.maxHeight = '300px';
        logContainer.style.overflowY = 'auto';

        activityData.forEach(item => {
            const logItem = document.createElement('div');
            logItem.innerHTML = `<strong>${item.name}</strong><br><small>${item.activity} - ${item.waktu}</small><hr>`;
            logContainer.appendChild(logItem);
        });

        $("#menu-toggle").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled");
});
$("#menu-toggle-2").click(function(e) {
   e.preventDefault();
   $("#wrapper").toggleClass("toggled-2");
   $('#menu ul').hide();
});

function initMenu() {
   $('#menu ul').hide();
   $('#menu ul').children('.current').parent().show();
   //$('#menu ul:first').show();
   $('#menu li a').click(
      function() {
         var checkElement = $(this).next();
         if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
         }
         if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
         }
      }
   );
}
$(document).ready(function() {
   initMenu();
});
    
    </script>