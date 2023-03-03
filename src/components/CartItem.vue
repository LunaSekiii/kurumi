<template>
	<v-list-item-content>
		<v-list-item-title>
			{{ item.item.name }}--{{ item.price }}
			<div class="count-box">
				<v-btn
					class="count-reduce count-btn"
					@click.stop="changeCount('reduce')"
				>
					-
				</v-btn>
				<input
					type="text"
					:value="item.count"
					@change="changeCount('change', $event)"
					@click.stop="() => {}"
					id="count-input"
					class="count-input"
					joninput="value=value.replace(/[^\d]/g,'')"
				/>
				<v-btn
					class="count-add count-btn"
					@click.stop="changeCount('add')"
				>
					+
				</v-btn>
			</div>
		</v-list-item-title>
		<v-list-item-subtitle>
			{{ item.extra.toString() }}
			<!-- <v-btn color="info">数量</v-btn> -->
		</v-list-item-subtitle>
		<v-list-item-subtitle>
			{{ item.remark.toString() }}
			<div class="price">￥{{ totalPrice }}</div>
		</v-list-item-subtitle>
	</v-list-item-content>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	methods: {
		extraIsActive(extra) {
			var isExist = false;
			this.item.extra.forEach((value) => {
				if (extra === value) isExist = true;
			});
			return isExist;
		},
		changeCount(oper, e) {
			if (oper === "change") {
				this.$emit(
					"changeCount",
					Number.parseInt(e.target.value),
					this.item
				);
				return;
			}
			this.$emit(
				"changeCount",
				Number.parseInt(this.item.count) +
					Number.parseInt(oper === "add" ? 1 : -1),
				this.item
			);
		},
	},
	computed: {
		totalPrice() {
			return (
				((this.item.item.price[this.item.price] || 0) +
					this.item.allExtra.reduce((totalExtraPrice, extra) => {
						if (this.extraIsActive(extra.name))
							return totalExtraPrice + extra.price;
						return totalExtraPrice;
					}, 0)) *
				this.item.count
			);
		},
	},
	// mounted() {
	// 	console.log(
	// 		this.item.item.name +
	// 			this.item.price +
	// 			this.item.extra.toString() +
	// 			this.item.remark.toString()
	// 	);
	// },
};
</script>

<style lang="less" scoped>
.count-box {
	float: right;
	.count-input {
		width: 3rem;
	}
	.count-btn {
		max-width: 4rem;
		min-width: 2rem;
	}
}
.v-list-item__title {
	overflow: initial;
}
.price {
	float: right;
	margin: 10px 10px 0 0;
	font-size: 1.5rem;
}
</style>
