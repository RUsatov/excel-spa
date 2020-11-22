class Dom {
  constructor (selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  /**
   * Если передан параметр html, то добавляем этот html внутрь элемента $('element').
   * Если не передан, тогда просто возвращает весь html включая элемент $('element').
   * @param {string} html - html который надо добавить
   * @returns {string|Dom} assa
   */
  html (html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  on (eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off (eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  clear () {
    this.html('')
    return this
  }

  append (node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }
}

export function $ (selector) {
  return new Dom(selector)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
