var tree2str = function(t) {
    if (!t) return '';

    const left = tree2str(t.left);
    const right = tree2str(t.right);
    
    // omit printing empty right node in the string
    if (right) return `${t.val}(${left})(${right})`;
    else if (left) return `${t.val}(${left})`;
    else return `${t.val}`;
};