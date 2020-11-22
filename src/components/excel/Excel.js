import { $ } from '@core/dom'

export class Excel {
  constructor (selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  /**
   * Собирает все узлы в один и возвращает всё это в одном div.
   * @return {jQuery|HTMLElement|Dom} корневой узел для excel
   */
  getRoot () {
    const $root = $.create('div', 'excel')

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // DEBUG
      // if (component.name) {
      //   window['c'+component.name] = component
      // }

      $el.html(component.toHtml())
      $root.append($el)
      return component
    })
    return $root
  }

  render () {
    this.$el.append(this.getRoot())
    this.components.forEach(component => component.init())
  }
}
