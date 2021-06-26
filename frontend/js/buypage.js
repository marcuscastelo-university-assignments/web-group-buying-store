$(document).ready(function () {
    populateMilestones(carrouselSalesInfo[0].items[0]);
    populateMilestoneSpots(carrouselSalesInfo[0].items[0]);

    //Mouse Events
    $('.milestone-item .card-header').click(function (e) {
        e.preventDefault();
        workOnMilestones($(this).parent());

        let spotID = $(this).parent().attr("data-milestone");
        if (spotID != 'buy')
            workOnMilestoneSpots($(`a[data-milestone=${spotID}]`).parent());
    });

    //Mouse Events
    
    $('a:has(> span.milestone-progress-spot)').click(function (e) {
        e.preventDefault();
        workOnMilestoneSpots($(this).parent());
        workOnMilestones($(`div[data-milestone=${$(this).attr("data-milestone")}]`));
    });
});