module.exports = {
    tasks: {
        cat: {
            test: {
                src: ['{{ qux }}', 'baz/*.js'],     // [['foo/*.js', 'bar/*.js'], 'baz/*.js']
                dest: 'dist/{{ baz }}.js',         // 'build/abcde.js'
            }
        },
        // Arbitrary properties used in task configuration templates.
        foo: 'c',
        bar: 'b{{ foo }}d', // 'bcd'
        baz: 'a{{ bar }}e', // 'abcde'
        qux: ['foo/*.js', 'bar/*.js']
    },
    targets: {
        dist: 'cat:test'
    }
};