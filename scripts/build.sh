cd packages && \
mkdir -p eth-transactions/lib && mkdir -p eth-providers/lib && mkdir -p eth-rpc-adapter/lib \

cd eth-transactions && yarn && yarn run build && cd .. && \
cd eth-providers && yarn && yarn run build && cd .. && \
cd eth-rpc-adapter && yarn && yarn run build 