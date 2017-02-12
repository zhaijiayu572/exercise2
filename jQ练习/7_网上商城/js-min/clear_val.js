$(function () {
   $('.search input').on({
       'focus':function () {
           $(this).val('');
       },
       'blur':function () {
           if($(this).val()==''){
               $(this).val(this.defaultValue);
           }
       }
   })
});
