export const contains = document.documentElement.contains ?
  (parent, node) => {
    return parent.contains(node)
  } : (parent, node) => {
    while (node && (node = node.parentNode))
      if (node === parent) return true
    return false
  }
