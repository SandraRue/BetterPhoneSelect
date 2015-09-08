jQuery.fn.extend({
	BetterPhoneSelect : function(config) {
		
		/****************************
		 * 建议
		 * 1、先设置默认config。
		 * 2、读取传进来的config，覆盖默认。
		 * 3、处理this对象，this对象是html页面的一个jquery对象 $(".myselect")，里面可能匹配了一个或多个select元素，每一个元素都要把它处理成有它自己独立行为的控件，这个可以参考PhonePhotoUpload项目。
		 *    A、让select元素隐藏起来，在它后面添加一个span元素来代替select已选中选中项的显示。
		 *    B、为span元素绑定点击事件，当点击时，显示一个浮动层，并从已隐藏的select元素中读取它的可选数据进行显示（option的innerText和value）。<option value="value">innerText</option>
		 *    C、为已显示的浮动层中的每一个可选项绑定点击事件，当点击时，读取被点项的value，并把已隐藏的select元素的选中项设为该value，把span元素中的文字设置为该项的innerText，然后关闭浮动层。
		 * **************************
		 */
		//设置默认值
		var defaults={
				FontColor:'#333',//设置文字颜色
				BackgroundColor:"white",//设置背景颜色
				FontSize:"14px",//设置文字大小
				SelectedStringLength:"20",//设置选框按钮字符串的长度
		};
		
		//页面传值，覆盖默认值
		$.each(config,function(k,v){
			if (v != undefined){
				eval('defaults.'+k+'="'+v+'";');
			}
		});
		
		var init = function(divs) {

			divs.each(function(i) {
				
				var plugin_container = this;
				
				$(plugin_container).addClass("myselect_options"+i);
				
				
				//隐藏下拉标签
				$(this).css("display","none");
				
				//定义新变量，控制指定变量的字符串长度
				var cutstr=function(str,len){
					var str_length = 0;
					var str_len = 0;
					str_cut = new String();
					str_len = str.length;
					for(var i = 0;i<str_len;i++){
						a = str.charAt(i);
						str_length++;
				        if(escape(a).length > 4){
				         //中文字符的长度经编码之后大于4
				        	str_length++;
				        }
				        str_cut = str_cut.concat(a);
				        if(str_length>=len){
				        	str_cut = str_cut.concat("...");
				        	return str_cut;
				        }
					}
				    //如果给定字符串小于指定长度，则返回源字符串；
				    if(str_length<len){
				    	return  str;
				    }
				};
				
				//在下拉后面添加已选择项与选项框
				var select_obj = $(this)[0];
				var trim_selected =$(this)[0].options[$(this)[0].selectedIndex].text;
				trim_selected= trim_selected.replace(/\s+/g,"");
				$(this).after('<div id="selected_option'+i+'" style="display:inline-block;border:1px solid #999;padding:2px 5px;background:white;">'+
							  '<span>'+cutstr(trim_selected,defaults.SelectedStringLength)+'</span>'+
									'<span style="font-size: 0; border-width: 5px; border-style: solid; border-color: #666 #fff #fff #fff;float:right;margin:8px 0 0 4px;"></span>'+
							  '</div>'+
							  '<div id="all_select_options'+i+'" style="display:none;position:fixed;background:rgba(0,0,0,.5);width: 100%;height: 100%;top: 0px;left: 0px;">'+
							  		'<ul class="select_options" style="border:2px solid #999;background:'+defaults.BackgroundColor+';padding:0 10px;position:relative;max-height:60%; overflow:scroll;margin:0 auto;top:15%;max-width: 70%;-webkit-overflow-scrolling : touch; "></ul>'+
							  '</div>');
				
				//将隐藏的下拉选项复制到div选项框中
				$('#all_select_options'+i).find('.select_options').append($(this).find('option').clone() ); 
				
				//将复制过来的选项的option标签替换为div标签
				$(this).siblings('#all_select_options'+i).find('option').each(function(){
					
				    $(this).replaceWith('<li class="each_option '+$(this).attr("class")+'" style="line-height:30px;color:'+defaults.FontColor+';font-size:'+defaults.FontSize+';text-overflow:ellipsis;white-space:nowrap; overflow:hidden; ">'+$(this).html()+'</li>');
				   
				});
				
			    $(this).siblings('#all_select_options'+i).find('.each_option').removeClass('undefined');
				
				//为新建的下拉已选项绑定点击事件
				$(this).siblings('#selected_option'+i).bind("click",function(e){
					
					 //var scroll_position=$('body').scrollTop();
					 //$(this).siblings('#all_select_options').css("top",scroll_position+"px");
					//切换所有选项的显示状态
					$(this).siblings('#all_select_options'+i).toggle();
					e.stopPropagation();
					//下拉框显示时点击下拉框以外的地方隐藏
					if($(this).siblings('#all_select_options'+i).css("display")=="block"){
						$(this).siblings('#all_select_options'+i).bind("click",function(){
							$(this).hide();
						});
						
					}
				})
				//为每个下拉选项绑定点击事件
				$(this).siblings('#all_select_options'+i).find('.each_option').bind("click",function(){
					//设置下拉框中选中的选项的css
					$(this).css("color","red").siblings().css("color",defaults.FontColor);
					//显示选中选项，插入下拉倒三角图标的插入
					$(this).parents('#all_select_options'+i).siblings('#selected_option'+i).html('<span>'+cutstr($(this).text().replace(/\s+/g,""),defaults.SelectedStringLength)+'<span>')
						   .append('<span style="font-size: 0; border-width: 5px; border-style: solid; border-color: #666 #fff #fff #fff;float:right;margin:8px 0 0 4px;"></span>');
					//获取点击选项的位置
					var position_index=$(this).index()+1;
					
					//移除隐藏的下拉框的已选按钮
					
					//$(select_obj).val($(this).attr('data'));
					
					
					
					$(this).parents('#all_select_options'+i).siblings('.myselect_options'+i).find('option').removeAttr('selected');
					
					//将隐藏的下拉选项与出现的下拉选项同步
					var selected_val=$(this).parents('#all_select_options'+i).siblings('.myselect_options'+i).find('option:nth-child('+position_index+')').val();
					$(".myselect_options"+i).val(selected_val);
					
					//选择选项之后隐藏下拉框
					$(this).parents('#all_select_options'+i).css("display","none");
				})
				
				//设置默认的选中项的css
				var default_position_index=$("select option:selected").index()+1;
				$('#all_select_options'+i).find('.each_option:nth-child('+default_position_index+')').css("color","red");
				
				
				
			});
			
		};

		init(this);	
	},

});