const init = function () {
    loadSelectItems('regions-select', 'regions')
    loadSelectItems('office-type-select', 'offices')
    loadSelectItems('content-type-select', 'content-types')
    loadSelectItems('language-select', 'languages')
    loadSelectItems('topic-select', 'topics')

    function loadSelectItems(select, type) {
        let $parentContainer = $(`#${select} .options`);
        let jsonUrl = `/assets/js/render-data/json-files/global/${type}.json`

        if($parentContainer.length) {
            $.ajax({
                type: 'GET',
                url: jsonUrl,
                dataType: 'json',
                success: function(response){
                    response.forEach((item) => {
                        const optionHTML = `
                    <li role="option">
                        <label class="checkbox-item">
                            <input type="checkbox" value="${ item.value }">
                            <span class="checkmark"></span>
                            <span class="name">${ item.name }</span>
                        </label>
                    </li>`;
                        $parentContainer.append(optionHTML);
                    });
                }
            });
        }
    }
}

export default init
