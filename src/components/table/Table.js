import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel-table'

  toHtml () {
    return createTable()
    // `
    //   <div class="row">
    //     <div class="row-info"></div>
    //
    //     <div class="row-data">
    //       <div class="column">A</div>
    //       <div class="column">B</div>
    //       <div class="column">C</div>
    //     </div>
    //   </div>
    //
    //   <div class="row">
    //     <div class="row-info">1</div>
    //
    //     <div class="row-data">
    //       <div class="cell selected" contenteditable>A1</div>
    //       <div class="cell" contenteditable>B1</div>
    //       <div class="cell" contenteditable>C1</div>
    //     </div>
    //   </div>
    //   <div class="row">
    //     <div class="row-info">2</div>
    //
    //     <div class="row-data">
    //       <div class="cell">A1</div>
    //       <div class="cell">B1</div>
    //       <div class="cell">C1</div>
    //     </div>
    //   </div>
    // `
  }
}
