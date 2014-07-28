$(function () {
    
    /* To simulate order flow navigation clicks in MCP for Naples team to see START */
    // Covers Step 2 (Checkuout), Step 3 (Details), Step 4 (Payment)
    $('section.order-flow-nav > a').click(function(e) {
        e.preventDefault();
        
        $this = $(this);
        if($this.is('.my-order-step, .active')) {
            return false;
        } else {
            var stepTriggerID = $this.attr('id');
            var extractedStepPrefix = stepTriggerID.split('-trigger')[0];
            var $matchingStepTarget = $('#' + extractedStepPrefix + '-target');
            
            // Step Trigger Class Logic
            $this.siblings('a').removeClass('active');
            $this.addClass('active').removeClass('complete');
            $this.prevAll().addClass('complete');
            
            // Step Target Match Display Logic
            $matchingStepTarget.siblings('div[id^="step-"]').hide();
            $matchingStepTarget.show();
        }
    });
    /* To simulate order flow navigation clicks in MCP for Naples team to see END */    
    
    /* Pizza Configurator START */
        // Top Selections Area START [done by Jolas]
        /*$('.phc-config-type-trigger-open').click(function(){
            $this = $(this);
            $this.hide();
            $this.closest('.phc-config-type-wrapper').find('.phc-config-type-target').show();
        });
        $('.phc-config-type-trigger-close').click(function(){
            $this = $(this);
            $this.closest('.phc-config-type-target').hide();
            $this.closest('.phc-config-type-wrapper').find('.phc-config-type-trigger-open').show();
        });*/
        // Top Selections Area END [done by Jolas]
    /* Pizza Configurator END */

    /* Wrap Every 2 Fav Items to be left/right and stackable if more than 2 Items START */
    $(function() {
        var favItemsDivs = $('.fav-orders-area .fav-order-item');
        for(var i = 0; i < favItemsDivs.length; i+=2) {
            favItemsDivs.slice(i, i+2).wrapAll('<div class="fav-order-items-row"></div>');
        }
    });
    /* Wrap Every 2 Fav Items to be left/right and stackable if more than 2 Items END */
    
    /* My Account Information Credit Card Form START */
    function showMyAccountCreditCardForm() {
        $('.payment-info-right .add-credit-card-btn').hide();
        $('.payment-info-right').find('#add-credit-card-form').show();
    }
    
    $('.payment-info-right .add-credit-card-btn, .payment-info-left .card-edit').click(function(){
        showMyAccountCreditCardForm();
    });
    /* My Account Information Credit Card Form END */
    
    /* Header Show Address on Click/Hover START */
    $('.delivery-location-line').hover(function(){
        $(this).click();
    }).click(function() {
        $this = $(this);
        $closestParent1 = $('.delivery-info');
        $closestParent2 = $('.started-your-order-info');

        if ($this.is('.normal-white-space')) {
            $closestParent1.removeAttr('style');
            $closestParent2.removeAttr('style');
            $this.removeClass('normal-white-space');
        } else {
            $this.addClass('normal-white-space');
            var expandedHeight = $(this).height();
            $closestParent1.height(expandedHeight + 22);
            $closestParent2.height(expandedHeight + 31);
        }
    });
    /* Header Show Address on Click/Hover END */
    
    //Inititialize BS Add/Remove Coupon Popovers/Tooltips (used for Add Coupon in header nav)    
    $(".add-coupon").popover({
        placement: 'bottom',
        html: 'true',
        title : 'Enter Your Discount Code!'+
                '<span class="close">&times;</span>',
        content : '<ul class="coupon-list">'+
                    '<li class="coupon-list-item">'+
                      '<span class="coupon-list-item-title">Applied Code:</span>'+
                      '<span class="coupon-list-item-code">freemeal</span>'+
                      '<span class="coupon-list-item-remove">Remove</span>'+
                    '</li>'+
                    '<li class="coupon-list-item">'+
                        '<span class="coupon-list-item-title">Applied Code:</span>'+
                        '<span class="coupon-list-item-code">pizza50off</span>'+
                        '<span class="coupon-list-item-remove">Remove</span>'+
                    '</li>'+
                  '</ul>'+
                  'Coupon Code: <input type="text" class="add-coupon-input form-control" placeholder="ZYXP241SD">'+
                  '<button type="submit" class="btn btn-gold">Add</button>'+
                  '<div class="coupon-status">'+
                    '<div class="coupon-success"><span class="glyphicon glyphicon-ok"></span> Code Accepted, thanks!</div>'+
                    '<div class="coupon-error"><span class="glyphicon glyphicon-remove"></span> Invalid Code!</div>'+
                  '</div>'
    });
    $(".delivery-price").on('click', '.close', function(){
        $(".add-coupon").popover('hide');
    });
    
    /* Mobile Slide Out Navigation START */
        //Mobile Navigation
        $('#mobile-nav-trigger').sidr({
            name: 'mobile-nav-main',
            source: '#mobile-nav-content'
        });
        //Mobile Navigation Collapsing
        $('#mobile-nav-main a[rel=collapse-trigger]').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('li').find('ul[rel=collapse-group]');
            $collapse.toggle();
        });
    /* Mobile Slide Out Navigation END */

});


// OS: Local Dev Only
(function($) {

  // My micro jQuery templating engine
  // Include this script before your closing </body> tag.
  // Usage:
  //
  //    <section data-html="content"></section>
  //
  // This will load <html/content.html> into <section>

  var dirPath = "partials/",
      includes = $("[include-html]"),
      len = includes.length;

  // Postpone the ready event.
  if (len) {
    $.holdReady( true );
  }

  // Load external contents
  includes.each(function(i, el) {
    var src = dirPath + $(el).attr("include-html") + ".html";
    $(el).load(src, function() {
      if (i == len - 1) {
        $.holdReady( false );
      }
    });
  });

})(jQuery);