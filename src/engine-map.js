import locales from './locales';
export default {
    'google_cloud':{
        'name':'Google Translate',
        'minLevel':0,
        'cpp':1,
        'isRealtime':true,
    },
    'deepl':{
        'name':'DeepL',
        'minLevel':0,
        'cpp':1,
        'isRealtime':true,
    },
    'auto':{
        'name':Object.fromEntries(Object.entries(locales).map(([k,v])=>[k,v.selectAutomatically])),
        'minLevel':0,
        'cpp':1,
        'isRealtime':false,
    },
    'deepseekv4_flash':{
        'name':'DeepSeek-V4 Flash',
        'minLevel':1,
        'cpp':1,
        'isRealtime':false,
    },
    'gpt54_nano':{
        'name':'GPT-5.4 nano',
        'minLevel':1,
        'cpp':3,
        'isRealtime':false,
    },
    'claude5_sonnet':{
        'name':'Claude Sonnet 5',
        'minLevel':2,
        'cpp':10,
        'isRealtime':false,
    },
    'gpt56_terra':{
        'name':'GPT-5.6 Terra',
        'minLevel':3,
        'cpp':20,
        'isRealtime':false,
    },
}

