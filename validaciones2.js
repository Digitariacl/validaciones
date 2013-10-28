$(function(){
	$("#josForm").validate({
	    submitHandler: function(form) {
			 //xajax_saveUser(xajax.getFormValues('josForm'));
			//jQuery.post('index.php?option=com_mycomponente&task=function&format=raw',jQuery(form).serialize(), function(data){
			jQuery.post('index.php?option=com_mycomponent&format=raw&controller=ajax.raw&task=grabacontacto',jQuery(form).serialize(), function(data){
				if(data==1){
					alert("grabar OK");
				}else{
					alert("grabar ERROR");
				}
			}); 
	    },
		ignore: ":hidden",
		errorPlacement: function(error, element) {
			error.appendTo(element.parent().parent().parent().children().last());
		},
		errorElement: "span",
		errorClass: 'error',
		rules: {
			email: {
				required:true,
				email:true
			},
			"foto[]":
			{
				required: true,
				minlength : 10,
				maxlength : 1000
			}
		},
		messages: {
			email:{
				required:"Campo obligatorio ",
				email:" Campo obligatorio   "
			},
			"foto[]":
			{
				required: "",
				minlength: "minlength",
				maxlength: "maxlength"
			}
		},invalidHandler:function(){
			
		}
	});	
});