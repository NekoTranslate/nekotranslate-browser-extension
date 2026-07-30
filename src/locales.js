import en from './_locales/en/messages';
import de from './_locales/de/messages';
import fr from './_locales/fr/messages';
import nl from './_locales/nl/messages';
import it from './_locales/it/messages';
import es from './_locales/es/messages';
import pt from './_locales/pt_PT/messages';
import is from './_locales/is/messages';
import da from './_locales/da/messages';
import no from './_locales/no/messages';
import sv from './_locales/sv/messages';
import fi from './_locales/fi/messages';
import hu from './_locales/hu/messages';
import pl from './_locales/pl/messages';
import cs from './_locales/cs/messages';
import sk from './_locales/sk/messages';
import sl from './_locales/sl/messages';
import hr from './_locales/hr/messages';
import ro from './_locales/ro/messages';
import lt from './_locales/lt/messages';
import lv from './_locales/lv/messages';
import et from './_locales/et/messages';
import id from './_locales/id/messages';
import ja from './_locales/ja/messages';
import zh from './_locales/zh_CN/messages';
import ko from './_locales/ko/messages';
export default Object.fromEntries(Object.entries({
  en,
  de,
  fr,
  nl,
  it,
  es,
  pt,
  is,
  da,
  no,
  sv,
  fi,
  hu,
  pl,
  cs,
  sk,
  sl,
  hr,
  ro,
  lt,
  lv,
  et,
  id,
  ja,
  zh,
  ko
}).map(([k,v])=>{
  return [k,Object.fromEntries(Object.entries(v).map(([kk,vv])=>[kk, vv['message']]))];
}));

