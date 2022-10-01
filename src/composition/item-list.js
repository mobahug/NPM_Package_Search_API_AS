import { ref, toRefs, reactive } from "@vue/composition-api";
import useFetch from "./use-fetch";
export default function() {
  let packages = reactive({ list: [], error: null, fetching: false });
  const val = ref("");
  const submitted = async () => {
    const { response, error, fetchData, fetching } = useFetch(
      `https://api.npms.io/v2/search/suggestions?q=${val.value}`
    );
    fetchData();
    packages.list = response;
    packages.error = error;
    packages.fetching = fetching;
  };
  return { submitted, ...toRefs(packages), val };
}
