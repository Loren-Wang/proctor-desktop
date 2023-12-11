source_root=$(pwd)
ci_source_root=../apaas-cicd-web
build_branch=$proctor_desktop_branch

ci_script_version=v1
lib_dependencies=(
    agora-rte-sdk
    agora-edu-core
    agora-common-libs
)
lib_versions=(
    2.9.10
    2.9.10
    2.9.10
)
lib_branches=(
    release/2.9.10
    release/2.9.10
    release/2.9.10
)

. ../apaas-cicd-web/utilities/tools.sh
. ../apaas-cicd-web/build/$ci_script_version/dependency.sh
. ../apaas-cicd-web/build/$ci_script_version/build.sh

if [ "$debug" == "true" ]; then
    # show environment variables
    echo "------------- variables --------------------"
    set
    echo "--------------------------------------------"
fi

download_packages $source_root $build_branch "${lib_dependencies[*]}" "${lib_versions[*]}" "${lib_branches[*]}"

make_monorepo $source_root

install_packages $source_root

build_lib $source_root $ci_source_root agora-proctor-sdk $build_branch