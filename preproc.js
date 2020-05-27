// headings trigger a new slide
// headings with a caret (e.g., '##^ foo`) trigger a new vertical slide
module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(
            markdown
                .split('\n')
                .map((line, index) => {
                    if (!/^#/.test(line) || index < 3) {
                      return line;
                    }
                    const is_vertical = /^###/.test(line);
                    if (is_vertical) {
                        return '\n----\n\n' + line;
                    } else {
                        return '\n---\n\n' + line;
                    }
                })
                .join('\n')
        );
    });
};
