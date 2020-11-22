import { ExcelComponent } from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel-toolbar'

  constructor ($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    })
  }

  toHtml () {
    return `
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>
      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>
      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>
      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
    `
  }

  onClick(e) {
    console.log(e.target)
  }
}