jQuery.fn.extend({
	BetterPhoneSelect : function(config) {
				
				//隐藏下拉标签
				$(this).css("display","none");
				
				$(this).attr("id","BetterPhoneSelect");
				//在下拉后面添加已选择项与选项框
				$(this).after('<div class="selected_option" style="display:inline-block;border:1px solid #999;padding:2px 5px;background:white;">'+
									$(this).val()+
									'<span style="font-size: 0; border-width: 5px; border-style: solid; border-color: #666 #fff #fff #fff;float:right;margin:6px 0 0 4px;"></span>'+
							  '</div>'+
							  '<div class="all_select_options" style="display:none;position:absolute;background:rgba(0,0,0,.5);width: 100%;height: 100%;top: 0px;left: 0px;">'+
							  		'<div class="select_options" style="border:2px solid #999;background:white;padding:0 10px;position:relative;max-height:60%; overflow:scroll;margin:0 auto;top:15%;max-width: 70%;-webkit-overflow-scrolling : touch; "></div>'+
							  '</div>');
				//将隐藏的下拉选项复制到div选项框中
				$(this).siblings('.all_select_options').find('.select_options').append($(this).find('option').clone() ); 
				
				//将复制过来的选项的option标签替换为div标签
				$(this).siblings('.all_select_options').find('option').each(function(){
					
				    $(this).replaceWith('<div class="each_option '+$(this).attr("class")+'" style="line-height:30px;color:#333;text-overflow:ellipsis;white-space:nowrap; overflow:hidden; ">'+$(this).html()+'</div>');
				    
				    
				});
			    $(this).siblings('.all_select_options').find('.each_option').removeClass('undefined');
				
				//为新建的下拉已选项绑定点击事件
				$(this).siblings('.selected_option').bind("click",function(e){
					//切换所有选项的显示状态
					$(this).siblings('.all_select_options').toggle();
					e.stopPropagation();
					//下拉框显示时点击下拉框以外的地方隐藏
					if($(this).siblings('.all_select_options').css("display")=="block"){
						$(this).siblings('.all_select_options').bind("click",function(){
							$(this).hide();
						})
					}
				})
				//为每个下拉选项绑定点击事件
				$(this).siblings('.all_select_options').find('.each_option').bind("click",function(){
					//设置下拉框中选中的选项的css
					$(this).css("color","red").siblings().css("color","#333");
					//下拉倒三角图标的插入
					$(this).parents('.all_select_options').siblings('.selected_option').text($(this).text())
						   .append('<span style="font-size: 0; border-width: 5px; border-style: solid; border-color: #666 #fff #fff #fff;float:right;margin:6px 0 0 4px;"></span>');
					//获取点击选项的位置
					var position_index=$(this).index()+1;
					//移除隐藏的下拉框的已选按钮
					$(this).parents('.all_select_options').siblings('#BetterPhoneSelect').find('option').removeAttr('selected');
					//将隐藏的下拉选项与出现的下拉选项同步
					$(this).parents('.all_select_options').siblings('#BetterPhoneSelect').find('option:nth-child('+position_index+')').attr("selected","selected");
					//选择选项之后隐藏下拉框
					$(this).parents('.all_select_options').css("display","none");
				})
				//alert($("select option:selected").index());
				//设置默认的选中项的css
				var default_position_index=$("select option:selected").index()+1;
				$(this).siblings('.all_select_options').find('.each_option:nth-child('+default_position_index+')').css("color","red");
				
			},

		});