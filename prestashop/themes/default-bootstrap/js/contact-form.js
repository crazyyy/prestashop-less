function showProductSelect(e){$(".product_select").hide().prop("disabled","disabled").parent(".selector").hide(),$(".product_select").parents(".form-group").find("label").hide(),$("#"+e+"_order_products").length>0&&($("#"+e+"_order_products").removeProp("disabled").show().parent(".selector").removeClass("disabled").show(),$(".product_select").parents(".form-group").show().find("label").show())}"undefined"!=typeof $.uniform.defaults&&("undefined"!=typeof contact_fileDefaultHtml&&($.uniform.defaults.fileDefaultHtml=contact_fileDefaultHtml),"undefined"!=typeof contact_fileButtonHtml&&($.uniform.defaults.fileButtonHtml=contact_fileButtonHtml)),$(document).ready(function(){$(document).on("change","select[name=id_contact]",function(){showElemFromSelect("id_contact","desc_contact")}),$(document).on("change","select[name=id_order]",function(){showProductSelect($(this).attr("value"))}),showProductSelect($("select[name=id_order]").attr("value"))});