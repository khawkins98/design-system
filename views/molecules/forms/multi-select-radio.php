<div class="select-radio <?= $class ?>" data-multi-select>
    <button class="select-control" aria-label="<?= $title ?>" data-opening-action>
        <?= $title ?> <span></span>
    </button>
    <div class="options" data-type="<?= $dataType ?>">
        <?php for ($i = 0; $i < 4; $i++) { ?>
            <label class="checkbox-item radio">
                <input type="radio" value="" name="input-radio">
                <span class="checkmark"></span>
                <span class="name">List item <?= $i + 1?></span>
            </label>
        <?php } ?>
    </div>
</div>