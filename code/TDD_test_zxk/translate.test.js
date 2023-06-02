// 引入测试库
const assert = require('assert');
const translate = require('./translate');

describe('translate function', function() {
    it('should translate "software" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件');
    });

    it('should translate "software@" to Chinese correctly', async function() {
        const result = await translate('software', 'en', 'zh');
        assert.strictEqual(result, '软件@');
    });

    it('should handle space correctly', async function() {
        const result = await translate('hello world', 'en', 'zh');
        assert.strictEqual(result, '你好世界');
    });

    it('should handle error correctly', async function() {
        try {
            await translate('', 'en', 'zh');
        } catch (e) {
            assert.strictEqual(e.message, 'Invalid input');
        }
    });
});