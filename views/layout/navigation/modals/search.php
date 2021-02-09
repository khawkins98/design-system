<?php

use helpers\View;

?>

<section id="modal-popular-search" class="menu-modal modal-popular-search hide">
    <div class="modal-content showing-results">
        <div class="modal-body grid-container">
            <div class="grid-x grid-margin-x">
                <div class="cell">
                    <?php
                    View::render('molecules/forms/search-input', [
                        'id' => 'search',
                        'label' => 'Search',
                        'additionalClass' => 'big-search'
                    ]);
                    ?>
                </div>
            </div>
            <div class="results-and-filters-container">
                <div class="search-filters">
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'language-select',
                        'title' => 'Language',
                        'dataType' => 'language',
                        'actionListener' => 'data-language-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'content-type-select',
                        'title' => 'Content Type',
                        'dataType' => 'content-type',
                        'actionListener' => 'data-content-type-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'regions-select',
                        'title' => 'Region',
                        'dataType' => 'region',
                        'actionListener' => 'data-region-filter'
                    ]);
                    ?>
                    <?php
                    View::render('molecules/forms/multi-select', [
                        'id' => 'topic-select',
                        'title' => 'Topic',
                        'dataType' => 'topic',
                        'actionListener' => 'data-topic-filter'
                    ]);
                    ?>

                    <div class="flex-container active-filters" data-active-filters></div>
                </div>
                <div class="search-results">
                    <div class="grid-x grid-margin-x" data-modal-search>
                        <?php //Quick Links and Popular Searches columns are added via JS ?>
                        <div class="search-results-metadata">
                            Showing 1-10 of 1234 results across UNDP.org for <span>search term</span>
                        </div>
                        <div class="search-result-card">
                            <div class="tag">Date or Content tag or Page Label</div>
                            <a class="title-link" href="#">
                                <h2 class="heading h5">Lorem ipsum dolor sit amet, consectetur don adipiscing elit, sed
                                    do eiusmod tempor incididunt</h2>
                            </a>
                            <p class="medium-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
